const app = Vue.createApp({
    data(){
        return{
 
        bosses: [
            {
                id: 'Rahma',
                name: 'Rahma Rana',
                phone: '256 784 2155',
                email: 'Rahma@localhost.com'
            },
            {
                id: 'Rubab',
                name: 'Rubab Rana',
                phone: '256 784 2154',
                email: 'rubab@localhost.com',
            },
        ]
     }
    }
});
app.component('boss-contact', {
    template: `
    <li>
    <h2>{{ boss.name}}</h2>
      <button @click="toggleDetails()">Show Details</button>
      <ul v-if="deatilsAreVisible">
        <li><strong>Phone:</strong>{{boss.phone}}</li>
        <li><strong>Email:</strong>{{boss.email}}</li>
      </ul>
  </li>
    `,
    data(){
        return{
            deatilsAreVisible: false,
            boss: {
                id: 'Rahma',
                name: 'Rahma Rana',
                phone: '256 784 2155',
                email: 'Rahma@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails(){
            this.deatilsAreVisible = !this.deatilsAreVisible
        }
    }
})
app.mount("#app")



