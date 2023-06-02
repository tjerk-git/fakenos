// import { Configuration, OpenAIApi } from 'openai';
// import { SECRET_OPENAI_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    // const configuration = new Configuration({
    //     apiKey: SECRET_OPENAI_API_KEY,
    // });

    // const openai = new OpenAIApi(configuration);

    // const textResponse = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: "Als JSON met format(id, title, body) Geef mij 5 nieuwsartikelen die ontzettend positief zijn, ze hoeven niet waar te zijn en zijn geschreven op een leuke manier.",
    //     temperature: 0,
    //     max_tokens: 1000,
    // });

    // // Extracting the data object
    // const data = textResponse.data;
    // // console.log(data);

    // // Extracting specific properties from the data object
    // const choices = data.choices;
    // console.log(choices[0].text);

    //const news = JSON.parse(choices[0].text);

    // console.log(newsData);

    // const newsWithImages = [];

    // for (const newsItem of newsData) {
    //     const imageResponse = await openai.createImage({
    //         prompt: `Geef mij een afbeelding over ${newsItem.title}`,
    //         n: 1,
    //         size: "1024x1024",
    //     });

    //     const image = imageResponse.images[0].image;

    //     const newsItemWithImage = {
    //         id: newsItem.id,
    //         title: newsItem.title,
    //         body: newsItem.body,
    //         image: image,
    //     };

    //     newsWithImages.push(newsItemWithImage);
    // }

    // const news = JSON.stringify(newsWithImages);

    //const news = textResponse.data.choices[0].text;
    const news = {
        "articles": [
            {
                "id": 1,
                "title": "Lokale vrijwilligers zetten een glimlach op gezichten van ouderen",
                "body": "Een groep lokale vrijwilligers organiseerde een evenement waarbij ze ouderen uit verzorgingstehuizen uitnodigden voor een gezellige dag vol activiteiten en samenzijn. De ouderen genoten van muziek, spelletjes en lekkernijen, en de vrijwilligers zorgden ervoor dat iedereen een glimlach op zijn gezicht had."
            },
            {
                "id": 2,
                "title": "Plaatselijke school haalt geld op voor daklozenopvang",
                "body": "Leerlingen van een plaatselijke school organiseerden een inzamelingsactie om geld in te zamelen voor een daklozenopvang in hun stad. Ze organiseerden een benefietconcert en verkochten zelfgemaakte kunstwerken. Met de opbrengst konden ze de daklozenopvang ondersteunen en zorgen voor een warme maaltijd en onderdak voor degenen die het het hardst nodig hebben."
            },
            {
                "id": 3,
                "title": "Kinderen planten duizenden bomen in hun gemeenschap",
                "body": "Een groep enthousiaste kinderen nam het initiatief om hun gemeenschap groener te maken. Samen met begeleiders plantten ze duizenden bomen in parken, tuinen en andere openbare ruimtes. Ze hopen hiermee niet alleen de natuur te helpen, maar ook een positieve impact te hebben op de luchtkwaliteit en de leefomgeving van hun medeburgers."
            },
            {
                "id": 4,
                "title": "Restaurant biedt gratis maaltijden aan daklozen",
                "body": "Een lokaal restaurant besloot iets terug te doen voor de gemeenschap door gratis maaltijden aan te bieden aan daklozen. Elke dag opent het restaurant zijn deuren en serveert het warme en voedzame maaltijden aan degenen die het zich niet kunnen veroorloven. Het initiatief heeft een grote positieve invloed gehad op de levens van vele daklozen."
            },
            {
                "id": 5,
                "title": "Jonge ondernemer doneert winst aan goed doel",
                "body": "Een jonge ondernemer die een succesvol bedrijf heeft opgebouwd, besloot om een deel van zijn winst terug te geven aan de maatschappij. Hij doneerde een aanzienlijk bedrag aan een lokaal goed doel dat zich inzet voor onderwijs en kansen voor kansarme jongeren. Zijn vrijgevigheid inspireerde anderen in de gemeenschap om ook bij te dragen aan de zaak en het verschil te maken."
            }
        ]
    };

    return {
        news: news
    }
}) satisfies PageServerLoad;
