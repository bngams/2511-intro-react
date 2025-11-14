import { useNavigate } from "react-router";
import ReactIcon from "@/assets/react.svg";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function Home() {
    const navigate = useNavigate();

    const [btnVariant, setBtnVariant] = useState<'default' | 'destructive'>('destructive');

    function scrollTo(elementId: string) {
        document.getElementById(elementId)?.scrollIntoView();
        setBtnVariant('default');
    }

    return (
        <>
            <div id="hero" className="text-center">
                <h1 className="text-center">My first React App</h1>
                <div className="flex justify-center">
                  <img src={ReactIcon} alt="React" className="h-[250px] w-[250px]"/>
                </div>
                <p>My super brand!</p>
                <div className="flex flex-col space-y-4 mt-4 mx-auto w-max">
                <Button onClick={() => navigate("/products")} variant={btnVariant}>Buy Products</Button>
                <Button onClick={() => scrollTo("intro")}>Continue</Button>
                </div>
            </div>
            <div id="intro" className="m-24">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus tempora blanditiis fuga ab nemo. Laboriosam, assumenda debitis, earum laborum velit explicabo doloribus ipsa, mollitia maiores at omnis quos sunt.
                Consectetur ad sed, quam culpa nostrum tempora similique suscipit nihil mollitia qui iusto? Quia, sed debitis ducimus ullam eligendi reiciendis suscipit soluta ipsam voluptas magni exercitationem, non nisi sit ex?
                Velit eligendi in ut. Rem nobis voluptatum earum harum ad ratione hic eum, quibusdam dolores ducimus quasi unde rerum fugiat quaerat odit iste asperiores similique est, consequuntur cumque. Modi, eveniet!
                Totam illum, tenetur sint quibusdam est ipsam minus. Eos beatae magni odit, amet at quidem itaque quis facilis blanditiis illum obcaecati impedit nesciunt dicta voluptates exercitationem quia aliquid, ducimus voluptas?
                Mollitia corrupti, eveniet aut odio quia nostrum repellat maiores eaque, architecto, unde voluptatem minima nulla. Laboriosam corporis quam at maiores officia aliquid tempore enim? Odit neque excepturi minima ullam optio?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsum assumenda sapiente quae quas libero obcaecati, neque labore ullam pariatur facere voluptatum, eius quod reiciendis possimus qui provident? Ab, provident!
                Commodi itaque vero nihil quae. Recusandae temporibus delectus repudiandae modi eos molestias similique consequuntur neque odio qui a placeat assumenda dolor aliquam veritatis, earum, illo error pariatur. Maxime, placeat ea.
                Cumque aliquam mollitia rerum quam. Sunt debitis, nostrum consequatur pariatur iure laborum numquam fuga error quod tenetur fugit velit natus deserunt rem eius. Tempora id non, libero illo quo qui!
                Praesentium et nesciunt eum dolore earum assumenda similique officiis incidunt quidem illum tempora adipisci, quaerat, sequi id maiores, nihil reprehenderit voluptate corporis? Dolorem, eos corporis voluptates quaerat error ratione. Incidunt.
                At suscipit fugiat, impedit dolores vel saepe tempora omnis veritatis, molestiae autem ipsam minus nam, ducimus soluta beatae facere mollitia eum. Iure, voluptates? Quaerat corrupti natus eius velit mollitia animi!</p>
            </div>
        </>
    );
}
export default Home;