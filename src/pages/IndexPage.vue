<template>
  
  <q-page class="flex flex-center">
    <div v-if="loading"><q-spinner /> Fetching data...</div>

    <div v-else>
      <q-list>
        <q-item-label header>Todos</q-item-label>
        <q-item v-for="(todo, index) in todos" :key="index">
          <q-item-label>
            {{ todo.title }}
          </q-item-label>
        </q-item>
      </q-list>
    </div>

    <q-btn
      v-if="!todos.length && !loading"
      label="Seed Data"
      class="q-mt-md"
      @click="seedData()"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import seedData from "../../data/todos.json";
import ThePage2Ö from "src/components/ThePage2-ö.vue";
//TODO bunu düzelt
export default defineComponent({
    name: "IndexPage",
    data() {
        return {
            loading: true,
            todos: [],
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            this.loading = true;
            this.todos = [];
            const q = query(collection(this.$db, "todos"), where("completed", "==", true));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((todo) => {
                this.todos.push(todo.data());
            });
            this.loading = false;
        },
        async seedData() {
            for (const todo of seedData) {
                //console.log(todo);
                await addDoc(collection(this.$db, "todos"), todo);
            }
            this.getData();
        },
    },
    components: { ThePage2Ö }
});
</script>
