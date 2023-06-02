<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<section>
    {#each data.news.articles as article}
        <article>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <figure>
                <img src="images/{article.id}.jpeg" alt={article.title} />
            </figure>
        </article>
    {/each}
</section>

<style>
    article {
        transition: all 0.7s;
        padding-bottom: var(--gutter);
        border-bottom: 1px solid var(--off-black);
    }

    figure {
        margin: 0 auto;
        justify-content: center;
        display: flex;
        align-items: center;
    }
</style>
