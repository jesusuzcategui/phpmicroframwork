<template>
    <div>
        <div class="uk-container">
            <div class="android-card-container mdl-grid">
                <div class="mdl-cell mdl-card mdl-shadow--3dp">
                    <div class="mdl-card__media">
                        <img src="/public/images/tarjetas/Tarjeta 1000.png">
                    </div>
                    <div class="mdl-card__title">
                        <h4 class="mdl-card__title-text">Tarjeta de 1000 CLP</h4>
                    </div>
                    <div class="mdl-card__actions">
                        <a class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                            Más información
                            <i class="material-icons">chevron_right</i>
                        </a>
                        <button @click="openPayment(1)" class="mdl-typography--text-uppercase mdl-button mdl-js-button mdl-button--raised">
                            Comprar
                        </button>
                    </div>
                </div>
                <div class="mdl-cell mdl-card mdl-shadow--3dp">
                    <div class="mdl-card__media">
                        <img src="/public/images/tarjetas/Tarjeta 2000.png">
                    </div>
                    <div class="mdl-card__title">
                        <h4 class="mdl-card__title-text">Tarjeta de 2000 CLP</h4>
                    </div>
                    <div class="mdl-card__actions">
                        <a class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                            Más información
                            <i class="material-icons">chevron_right</i>
                        </a>
                        <button @click="openPayment(2)"  class="mdl-typography--text-uppercase mdl-button mdl-js-button mdl-button--raised">
                            Comprar
                        </button>
                    </div>
                </div>
                <div class="mdl-cell mdl-card mdl-shadow--3dp">
                    <div class="mdl-card__media">
                        <img src="/public/images/tarjetas/Tarjeta 5000.png">
                    </div>
                    <div class="mdl-card__title">
                        <h4 class="mdl-card__title-text">Tarjeta de 5000 CLP</h4>
                    </div>
                    <div class="mdl-card__actions">
                        <a class="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                            Más información
                            <i class="material-icons">chevron_right</i>
                        </a>
                        <button @click="openPayment(3)" class="mdl-typography--text-uppercase mdl-button mdl-js-button mdl-button--raised">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="placement_response_form"></div>
        <div id="modal_purchase" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="uk-modal-header">
                    <h2 class="uk-modal-title">Necesitamos tus datos, por favor</h2>
                </div>
                <div class="uk-modal-body">
                    <pre>
                        {{payment}}
                    </pre>
                    <form>
                        <div class="uk-margin">
                            <input type="text" class="uk-input" v-model="payment.email" placeholder="Ingresa tu email" />
                        </div>
                        <div class="uk-margin">
                            <input type="text" class="uk-input" v-model="payment.phone" placeholder="Ingresa tu numero de teléfono" />
                        </div>
                    </form>
                </div>
                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancelar</button>
                    <button class="uk-button uk-button-primary" type="button" @click="proccessPayment()">Comprar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data(){
            return {
                payment: {
                    email: 'uzcateguijesusdev@gmail.com',
                    phone: '3104324212',
                    ammount: '',
                }
            };
        },
        methods: {
            proccessPayment(){
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        const form = new FormData();
                        form.append('precio', this.payment.ammount);
                        form.append('correo', this.payment.email);
                        form.append('telefono', this.payment.phone);

                        axios
                            .post('home/proccesspayment', form)
                            .then( (response) => {
                                const status = response.data.data.data;
                                if(status == 1){
                                    const placement_response_form = document.querySelector("#placement_response_form");
                                    const form_element = document.createElement('form');
                                    const input_element = document.createElement('input');
                                    form_element.action = response.data.data.cod.action;
                                    form_element.method = 'post';
                                    form_element.id = "form_payment_webpay";
                                    input_element.type = 'hidden';
                                    input_element.value = response.data.data.cod.token_ws;
                                    input_element.name = "token_ws";

                                    //formated form
                                    form_element.appendChild(input_element);

                                    placement_response_form.appendChild(form_element);

                                    swal({
                                        title: 'OK',
                                        icon: 'success',
                                        text: 'Vamos a pagar',
                                        buttons: false,
                                    });

                                    setTimeout(() => {
                                        form_element.submit();
                                    }, 2000);


                                }

                                if(status == 2){

                                }
                                console.log(response);
                            } )
                            .catch( (error) => {
                                console.error(error);
                            } );
                    } else {
                        swal("Your imaginary file is safe!");
                    }
                });
            },
            openPayment(ammount=null){
                this.payment.ammount = ammount;
                let modalHtml = document.querySelector("#modal_purchase");
                UIkit.modal(modalHtml).show();
            },
            showError(error=null){
                if(!error){
                    return false;
                }

                switch (error) {
                    case 2:
                        swal({
                            title: 'Info',
                            icon: 'warning',
                            text: 'Error al procesar la compra',
                            buttons: false,
                        });
                        break;
                    case 3:
                        swal({
                            title: 'Info',
                            icon: 'warning',
                            text: 'La recarga no pudo ser gestionada',
                            buttons: false,
                        });
                        break;
                    case 4:
                        swal({
                            title: 'Info',
                            icon: 'warning',
                            text: 'No hay tarjetas disponibles para este monto',
                            buttons: false,
                        });
                        break;
                }

                let modalHtml = document.querySelector("#modal_purchase");
                UIkit.modal(modalHtml).hide();

                this.payment = {
                    email: '',
                    phone: '',
                    ammount: '',
                };
            }
        },
        mounted(){

        }
    };
</script>