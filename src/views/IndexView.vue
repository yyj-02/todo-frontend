<template>
  <v-app>
    <v-container v-if="loading">
      <LoadingTodo />
    </v-container>
    <v-container v-else class="pa-0">
      <TodoList
        :todoList="todoList"
        :editingId="editingId"
        v-on:toggle-status="(payload) => toggleStatus(payload)"
        v-on:update-todo="(payload) => updateTodo(payload)"
        v-on:edit-todo="(payload) => editTodo(payload)"
        v-on:delete-todo="(payload) => deleteTodo(payload)"
      />
      <NewTodo
        v-if="editingId == 0"
        v-on:create-todo="(payload) => createTodo(payload)"
      />
    </v-container>
    <v-snackbar v-model="error">
      {{ errorMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="error = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NewTodo from "../components/NewTodo.vue";
import TodoList from "../components/TodoList.vue";
import LoadingTodo from "../components/LoadingTodo.vue";
import { TodoDocument } from "../common/index";

import { listTodo, createTodo, updateTodo, deleteTodo } from "../common/utils";

interface Data {
  todoList: TodoDocument[];
  editingId: string;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export default Vue.extend({
  components: {
    NewTodo,
    TodoList,
    LoadingTodo,
  },
  data: (): Data => {
    return {
      todoList: [
        {
          _id: "1",
          title: "test1",
          status: true,
        },
        {
          _id: "2",
          title: "test2",
          status: false,
        },
        {
          _id: "3",
          title: "test3",
          status: false,
        },
      ],
      editingId: "",
      loading: false,
      error: false,
      errorMessage: "",
    };
  },
  async created() {
    try {
      this.error = false;
      this.loading = true;
      this.todoList = await listTodo();
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    createTodo: async function (payload: string) {
      let temp = {
        _id: "",
        title: payload,
        status: false,
      };
      this.todoList.push(temp);
      try {
        await createTodo(temp.title);
      } catch (error) {
        this.errorMessage = "Failed to create todo";
        this.error = true;
      } finally {
        this.todoList = await listTodo();
      }
    },
    toggleStatus: async function (payload: string) {
      for (let i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i]._id == payload) {
          const temp = this.todoList[i];
          temp.status = !temp.status;
          this.todoList[i] = temp;
          await updateTodo(payload, {
            title: temp.title,
            status: temp.status,
          });
          this.todoList = await listTodo();
        }
      }
    },
    updateTodo: async function (payload: { id: string; title: string }) {
      this.editingId = "";
      for (let i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i]._id == payload.id) {
          const temp = this.todoList[i];
          temp.title = payload.title;
          this.todoList[i] = temp;
          try {
            await updateTodo(payload.id, {
              title: temp.title,
              status: temp.status,
            });
          } catch (error) {
            this.errorMessage = "Failed to update todo";
            this.error = true;
          } finally {
            this.todoList = await listTodo();
          }
        }
      }
    },
    editTodo: function (payload: string) {
      this.editingId = payload;
    },
    deleteTodo: async function (payload: string) {
      for (let i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i]._id == payload) {
          this.todoList.splice(i, 1);
          try {
            await deleteTodo(payload);
          } catch (error) {
            this.errorMessage = "Failed to delete todo";
            this.error = true;
          } finally {
            this.todoList = await listTodo();
          }
        }
      }
    },
  },
});
</script>
