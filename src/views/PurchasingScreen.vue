<template>
  <div id="modal">
    <div class="modal-content">
        <h3>Tickets Selected For Purchase</h3>
        <b-form>
            <b-container>
              <b-row>
                <b-col header>Movie Selected: </b-col>
                <b-col header>Number of Tickets Requested: </b-col>
                <b-col header>Available Times: </b-col>
                <b-col header>Available Tickets: </b-col>
              </b-row>
                <b-row>
                    <b-col>
                      <span class="title">{{this.$route.params.movie.title}}</span>
                    </b-col>
                    <b-col>
                        <b-form-group>
                            <b-form-select
                              v-model="newOrder.selectedTicketNum"
                              :options="numOfTix"
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group>
                            <b-form-select
                              v-model="newOrder.selectedMovieTime"
                              :options="times">
                        </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        {{this.$route.params.movie.available_tickets}}
                    </b-col>
                </b-row>
                <b-row>
                <b-button
                  v-if="finishing"
                  @click='finishPurchase'
                  variant="info"
                >
                  Finish Purchase
                </b-button>
                <div v-if="readyToPurchase" class="purchaseConfirmation">
                    <span class="confirm">{{this.$route.params.movie.title}}  at  {{newOrder.selectedMovieTime}}  for  {{newOrder.selectedTicketNum}} people?</span><br>
                    <b-link
                        slot="button"
                        variant="success"
                        :to="{name: 'credits', params: {newOrder: newOrder}}"
                      >
                        <button class="btn btn-primary" @click="completeOrder">Buy Tickets Now</button>
                    </b-link>
                </div>
                </b-row>
            </b-container>
        </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PurchasingModal',
  props: [
    'movie'
  ],
  data: function() {
    return {
      numOfTix: [
        {value: 1, text: '1'},
        {value: 2, text: '2'},
        {value: 3, text: '3'},
        {value: 4, text: '4'},
        {value: 5, text: '5'},
      ],
      times: [
          {value: '12:30', text: '12:30'},
          {value: '3:00', text: '3:00'},
          {value: '5:30', text: '5:30'},
          {value: '8:00', text: '8:00'},
          {value: '10:30', text: '10:30'},
      ],
      readyToPurchase: false,
      finishing: true,
      newOrder: {
          title: this.$route.params.movie.title,
          selectedMovieTime: '',
          selectedTicketNum: 0,
      },
    }
  },
  methods: {
    finishPurchase() {
      this.readyToPurchase = true;
      this.finishing = false;
    },
    completeOrder() {
      this.$store.commit('purchaseTix', {movieOrder: this.newOrder, id: this.$route.params.movie.id})
    }
  },
}
</script>

<style>
#modal {
  z-index: 21;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.modal-content {
  padding: 36px;
  border-radius: 8px;
  width: 700px;
  position: fixed;
  max-height: 100%;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}
h2 {
  font-weight: 600;
  font-size: 20px;
}
.input-field {
  width: 300px;
}
.confirm, .title{
  font-weight: bolder;
}
.confirm {
  padding: 10px 0px;
  display: flex;
  width: 100%;
  justify-content: center;
}
.purchaseConfirmation {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}
.col {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.row  {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
}
</style>
