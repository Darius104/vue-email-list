var app = new Vue(
    {
        el: '#root',
        data: {
            emailList: [],
        
        },

        methods: {
           
        },

        created: function(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {

                    // console.log(response)
                    const result = response.data;

                    const email = result.response;
                    console.log(email);

                    this.emailList.push(email);
                });
            }
            
        }
    }
)