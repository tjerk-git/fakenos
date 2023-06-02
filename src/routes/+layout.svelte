<script lang="ts">
    import "../app.css";
</script>

<div class="head">
    <div class="headerobjectswrapper">
        <header>De dagelijkse Tjerk</header>
    </div>

    <div class="subhead">Al sinds 1988...</div>
</div>

<main>
    <slot />
</main>

<style>
    header {
        font-family: "Play Fair", serif;
        font-weight: 900;
        font-size: 3rem;
        text-transform: uppercase;
        margin-bottom: var(--gutter);
        margin-top: var(--gutter);
    }
    .head {
        text-align: center;
        width: 100%;
        padding: 1rem;
    }

    .subhead {
        text-transform: uppercase;
        border-bottom: 2px solid #2f2f2f;
        border-top: 2px solid #2f2f2f;
        padding: 12px 0 12px 0;
    }
</style>
