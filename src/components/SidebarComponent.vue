<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img src="../assets/admin.png" alt="Vue" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button">
				<span class="material-icons">dashboard</span>
				<span class="text">Dashboard</span>
			</router-link>
            <Router-Link class="button" to="/paises">
                <span class="material-icons">
                    <i class="fa-solid fa-earth-americas"></i>
                </span>
                <span class="text">
                    Paises
                </span>
            </Router-Link>
            <Router-Link class="button" to="/Departamentos">
                <span class="material-icons">
                    <i class="fa-solid fa-city"></i>
                </span>
                <span class="text">
                    Estados
                </span>
            </Router-Link>
            <Router-Link class="button" to="/ciudades">
                <span class="material-icons">
                    apartment
                </span>
                <span class="text">
                    Ciudades
                </span>
            </Router-Link>
			<Router-Link class="button" to="/categorias">
                <span class="material-icons">category</span>
                <span class="text">
                    Categorías
                </span>
            </Router-Link>
			<Router-Link class="button" to="/subcategoria">
                <span class="material-icons">interests</span>
                <span class="text">
                    Subcategorias
                </span>
            </Router-Link>
            <Router-Link class="button" to="/propiedades">
                <span class="material-icons">real_estate_agent</span>
                <span class="text">
                    Propiedades
                </span>
            </Router-Link>
            <!-- <Router-Link class="button" to="/nosotros">
                <span class="material-icons">bedroom_parent</span>
                <span class="text">
                    Tipo de habitación
                </span>
            </Router-Link>
			<Router-Link class="button" to="/comodidades">
                <span class="material-icons">room_service</span>
                <span class="text">
                    Comodidades
                </span>
            </Router-Link> -->
			<Router-Link class="button" to="/comodidades">
                <span class="material-icons">person</span>
                <span class="text">
                    Usuarios
                </span>
            </Router-Link>
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/" class="button" @click="cerrar_sesion()">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>


<script>
//importing bootstrap 5 Modules
export default {
    data() {
            return {
                Id: 11,
            }
        },
    methods: {
        //cerrar sesion
        async cerrar_sesion()
        {
            await this.axios.post('/v1/cerrarsesion')
            .then(response => {
                this.$store.commit('setAuthenticated', false);
                this.$store.commit('setUserdata','');
                this.$store.commit('setRole','');
                this.$store.commit('setId','');
                localStorage.removeItem('token');
                localStorage.removeItem('id');
                //this.$router.push('/');
            })
            .catch(error => {
                var data = error.response.data;
            });
        },
    },
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 130px;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>