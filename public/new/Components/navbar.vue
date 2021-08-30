<template>
    <div>
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
            <nav class="uk-navbar-container uk-light" uk-navbar="mode: click">


                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="./">
                        <img style="width: 150px;" src="/images/logo_locutorios.png"  class="logo_img d-inline-block align-top" alt="">
                    </a>
                </div>

                <div class="uk-navbar-right">
                    <div class="uk-visible@m">
                        <ul class="uk-navbar-nav">
                            <li><a href="/#/">Comprar</a></li>
                            <li><a href="/#/como-comprar">¿Cómo comprar?</a></li>
                            <li><a href="/#/como-usar">¿Cómo usar?</a></li>
                            <li><a href="/#/preguntas-frecuentes">Preguntas frecuentes</a></li>
                            <li><a href="/#/contacto">Contacto</a></li>
                        </ul>
                    </div>
                    <div class="uk-hidden@m">
                        <ul class="uk-navbar-nav">
                            <li>
                                <a href="#sidefrontmenu" uk-toggle><span uk-icon="icon: menu; ratio: 2"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>

        <div id="sidefrontmenu" uk-offcanvas="mode:push; overlay: true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column uk-open">

                <div class="sidebar-help">

                    <button class="uk-offcanvas-close" type="button" uk-close></button>
                    <div>
                        <div class="uk-navbar-item uk-logo ">
                            <img src="/images/logo_locutorios.png"  class="logo_img d-inline-block align-top align-left" alt="">
                        </div>
                        <hr class="uk-divider-icon">
                    </div>
                    <div class="" >

                        <ul id="menuside" class="uk-nav nav-side uk-nav-parent-icon" uk-nav="multiple: true">
                            <li><a href="/#/">Comprar</a></li>
                            <li><a href="/#/como-comprar">¿Cómo comprar?</a></li>
                            <li><a href="/#/como-usar">¿Cómo usar?</a></li>
                            <li><a href="/#/preguntas-frecuentes">Preguntas frecuentes</a></li>
                            <li><a href="/#/contacto">Contacto</a></li>

                        </ul>

                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data(){
            return {};
        },
        mounted(){

        }
    };
</script>