<script>
    import { onMount } from "svelte";
    import Navbar from "./navbar.svelte";
    import Home from "./home.svelte";
    import Client from "./client.svelte";
    import Services from "./services.svelte";
    import Features from "./features.svelte";
    import Plans from "./plans.svelte";
    import Faqs from "./faq.svelte";
    import Reviews from "./reviews.svelte";
    import Counter from "./counter.svelte";
    import WorkProcess from "./workProcess.svelte";
    import Team from "./team.svelte";
    import Contact from "./contact.svelte";
    import Cta from "./cta.svelte";
    import Footer from "./footer.svelte";

    onMount(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    });

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
</script>
<svelte:head>
	<title>Landing | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<div class="layout-wrapper landing">
    <Navbar />
    <Home />
    <Client />
    <Services />
    <Features />
    <Plans />
    <Faqs />
    <Reviews />
    <Counter />
    <WorkProcess />
    <Team />
    <Contact />
    <Cta />
    <Footer />
    <button
        class="btn btn-danger btn-icon landing-back-top"
        id="back-to-top"
        on:click={() => toTop()}
    >
        <i class="ri-arrow-up-line" />
    </button>
</div>
