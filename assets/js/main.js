var app = new Vue(
  {
    el: '#app',
    data: {

      imgPath: './assets/img/avatar',
      indiceDinamico: 0,
      search: "",

      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
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
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
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
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
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
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: '_4',
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
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: '_5',
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
          ],
        },
        {
          name: 'Claudia',
          avatar: '_6',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
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
          ],
        },
        {
          name: 'Federico',
          avatar: '_7',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: '_8',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ]
    },

    methods: {

      /* Milestone 2
      Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
      visualizzare tutti i messaggi relativi al contatto attivo all’interno 
      del pannello della conversazione
      Click sul contatto mostra la conversazione del contatto cliccato */

      selectedChat(element, index) {

        this.indiceDinamico = index;

      },

      /* Milestone 3
      Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
      “enter” il testo viene aggiunto al thread sopra, come messaggio verde
      Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
      un “ok” come risposta, che apparirà dopo 1 secondo. */

      sendMessage() {

        let day = new Date();
        let today = day.toLocaleDateString();
        let instantHour = dayjs().format('H:mm');
        let currentDay = today + instantHour;

        if (this.newMessage == '') {

        } else {

          let obj = {

            date: currentDay,
            message: this.newMessage,
            status: 'sent',
          }
          this.newMessage = '';
          setTimeout(this.atuomaticAnswer, 1000);
          return this.contacts[this.indiceDinamico].messages.push(obj);
        }

      },

      atuomaticAnswer() {

        let day = new Date();
        let today = day.toLocaleDateString();
        let instantHour = dayjs().format('H:mm');
        let currentDay = today + instantHour;

        let obj = {

          date: currentDay,
          message: 'funzionaaaaa tuttoooooo !!!!!',
          status: 'received',
        }
        return this.contacts[this.indiceDinamico].messages.push(obj);

      },


      // Milestone 4
      // Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo
      // i contatti il cui nome contiene le lettere inserite 
      // (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

      searchIn() {

        this.contacts.forEach(element => {

          let nameLowerCase = element.name.toLowerCase();

          if (nameLowerCase.includes(this.searchName)) {

            return element.visible = true;

          } else {

            return element.visible = false;

          }

        });
      },

      messageTime(element) {

        let date = element.date;
        let time = date.slice(10, 16);

        return time;
      },


      lastMessageSent(element) {

        return element.messages[element.messages.length - 1];
        
      },

      timeMessage(element) {
        
        let position = element.messages;
        let indextimeMessage = position.length - 1;

        let date = position[indextimeMessage].date;
        let time = date.slice(10, 16);

        return time;
      },

    },
  }
)