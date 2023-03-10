console.log("ciao")

const { createApp } = Vue

const contacts= [{
    name: 'Michele',
    avatar: './img/avatar_1.png',
    visible: true,
    messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Hai portato a spasso il cane?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Ricordati di stendere i panni',
        status: 'sent'
        },
        {
        date: '10/01/2020 16:15:22',
        message: 'Tutto fatto!',
        status: 'received'
    }
    ],},

    {
    name: 'Fabio',
    avatar: './img/avatar_2.png',
    visible: true,
    messages: [
        {
        date: '20/03/2020 16:30:00',
        message: 'Ciao come stai?',
        status: 'sent'
        },
        {
        date: '20/03/2020 16:30:55',
        message: 'Bene grazie! Stasera ci vediamo?',
        status: 'received'
        },
        {
        date: '20/03/2020 16:35:00',
        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'sent'
    }
    ],},

    {
    name: 'Samuele',
    avatar: './img/avatar_3.png',
    visible: true,
    messages: [
        {
        date: '28/03/2020 10:10:40',
        message: 'La Marianna va in campagna',
        status: 'received'
        },
        {
        date: '28/03/2020 10:20:10',
        message: 'Sicuro di non aver sbagliato chat?',
        status: 'sent'
        },
        {
        date: '28/03/2020 16:15:22',
        message: 'Ah scusa!',
        status: 'received'
    }
    ],},

    {
    name: 'Alessandro B.',
    avatar: './img/avatar_4.png',
    visible: true,
    messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Si, ma preferirei andare al cinema',
        status: 'received'
        }
    ],},

    {
    name: 'Alessandra L.',
    avatar: './img/avatar_5.png',
    visible: true,
    messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Ricordati di chiamare la nonna',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Va bene, stasera la sento',
        status: 'received'
        }
    ],},

    {
    name: 'Claudia',
    avatar: './img/avatar_6.png',
    visible: true,
    messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Ciao Claudia, hai novit???',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Non ancora',
        status: 'received'
        },
        {
        date: '10/01/2020 15:51:00',
        message: 'Nessuna nuova, buona nuova',
        status: 'sent'
        }   
    ],},

    {
    name: 'Federico',
    avatar: './img/avatar_7.png',
    visible: true,
    messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'Grazie per avermelo ricordato, le scrivo subito!',
        status: 'received'
        }
    ],},

    {
    name: 'Davide',
    avatar: './img/avatar_8.png',
    visible: true,
    messages: [
        {
        date: '10/01/2020 15:30:55',
        message: 'Ciao, andiamo a mangiare la pizza stasera?',
        status: 'received'
        },
        {
        date: '10/01/2020 15:50:00',
        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
        status: 'sent'
        },
        {
        date: '10/01/2020 15:51:00',
        message: 'OK!!',
        status: 'received'
        }
    ],}
]



createApp({
  data() {
    return {
        
        contacts: contacts,

        activeChat: 0,

        activeState: undefined,

        activeMessages: 0,

        activeName: "Michele",

        activeAvatar: './img/avatar_1.png',

        placeholderMessage: "Scrivi un messaggio..." ,

        inputMessage: "",
    }
  },

  methods: {

    selectChat(activeChat){
        
        this.activeState = activeChat
        this.activeChat = activeChat
        
        console.log(this.activeChat)
        this.activeName = this.contacts[activeChat].name
        this.activeAvatar = this.contacts[activeChat].avatar
         
    },

    addMessage(){ 
       
        const activeChat = this.activeChat
        const newMessage = {
            date: "10/01/2020",
            message: this.inputMessage,
            status: "sent"
        }
        this.contacts[activeChat].messages.push(newMessage)
        console.log("message sent:", this.inputMessage, contacts)
        
        setTimeout(this.answer,2000,activeChat)
       
        //this.answer()
    },


    
    answer(index){
        console.log(index)
       // const activeChat = this.activeChat
        const newMessage = {
            date: "10/01/2020",
            message: "Ok",
            status: "recevied" 
        }
        this.contacts[index].messages.push(newMessage)

    },



    
    


  },


}).mount('#bzapp')