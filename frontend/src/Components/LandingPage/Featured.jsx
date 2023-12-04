import React from 'react';

const FeaturedSection = () => {
    const articles = [
        {
            id: 1,
            title: 'How to build muscle with exercise in 5 weeks',
            image: 'https://img.freepik.com/free-photo/suntanned-shirtless-fitness-male-model-isolated-grey-background_613910-9245.jpg?w=1800&t=st=1701575631~exp=1701576231~hmac=d29056d0dff3068ab75b6e91733acb28232506ef931b45ac38f3d6b11a5981cd', // Replace with your actual image URL
            link: 'https://www.medicalnewstoday.com/articles/319151',
        },
        {
            id: 2,
            title: 'How the hell is the best way to get all my protein?',
            image: 'https://img.freepik.com/free-photo/real-food-pyramid-assortment-top-view_23-2150238927.jpg?w=2000&t=st=1701575774~exp=1701576374~hmac=58ee5cc04c30e8153e4e0e28b47658e56846cc9d27150c61d42b796407d3e998', // Replace with your actual image URL
            link: 'https://forums.t-nation.com/t/how-the-hell-is-the-best-way-to-get-all-my-protein/285811',
        },
        {
            id: 3,
            title: 'How to Lose 10 Pounds of Fat, Forever',
            image: 'https://img.freepik.com/free-photo/front-view-doctor-using-adipometer_23-2150165506.jpg?w=2000&t=st=1701575890~exp=1701576490~hmac=8620e2127e02a72b6d34baa38576cfbec49dd82edffdb50a1e08690d2a31b916', // Replace with your actual image URL
            link: 'https://forums.t-nation.com/t/how-to-lose-10-pounds-of-fat-forever/284991',
        },
        {
            id: 4,
            title: 'Best and Worst Fats for Bodybuilders & Athletes',
            image: 'https://img.freepik.com/free-photo/fit-vs-fat_23-2147961052.jpg?w=2000&t=st=1701577685~exp=1701578285~hmac=33ac50004dc68aabd923dfaa4297472e48a139f53d29d03d4eed61e4a4775c09', // Replace with your actual image URL
            link: 'https://forums.t-nation.com/t/best-and-worst-fats-for-bodybuilders-athletes/285633',
        },
        {
            id: 5,
            title: '6 Factors That Can Affect How Many Calories You Burn',
            image: 'https://img.freepik.com/free-photo/calories-nutrition-food-exercise-concept_53876-133971.jpg?w=2000&t=st=1701577994~exp=1701578594~hmac=0e44b2fda7e3b44e49f559b72dbc46c2c63c9039e2cbc33786035de4a850428e', // Replace with your actual image URL
            link: 'https://www.everydayhealth.com/fitness/factors-that-can-affect-how-many-calories-you-burn/',
        },
        {
            id: 6,
            title: '5 Weird Things Running Does to Your Body',
            image: 'https://img.freepik.com/free-photo/full-shot-people-running-together-outdoors_23-2149037622.jpg?w=2000&t=st=1701578133~exp=1701578733~hmac=3b382dc2b4c375a6f56178a41a44470081948d502f89474760d6086f561e370c', // Replace with your actual image URL
            link: 'https://www.everydayhealth.com/fitness-pictures/weird-things-running-does-to-your-body.aspx',
        },

    ];

    return (
        <div className="featured-section mb-5">
            <h2 className="featured-title mb-4">Featured Articles</h2>
            <div className="article-cards">
                {articles.map((article) => (
                    <a href={article.link} target="_blank" rel="noopener noreferrer" key={article.id} className="article-card mx-4 my-4">
                        <img src={article.image} alt={article.title} height={200} />
                        <div className="card-content">
                            <h3>{article.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FeaturedSection;
