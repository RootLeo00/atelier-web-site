/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { AuthorSetup, NavbarSetup, NavbarSetupType, NavbarSetup_NAVLINKS, NavbarSetup_Socials } from "../../src/constants/codeBlocks";

const IoSonoAchille = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Io sono Achille
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                Sergio Bolzonello ha dichiarato la sua preferenza per il libro di David Malouf, Io sono Achille.
                </Text>
                <Text p >
                    Tra i molti libri composti dai diversi popoli e nelle diverse epoche, senza dubbio due fra loro sono quelli che, più di altri, hanno saputo dar vita ad altri libri. Sono senza dubbio la Bibbia e l'Iliade. In ordine di tempo l'ultimo libro generato dall'Iliade è certamente Io sono Achille di David Malouf.
                    È un libro composto da uno scrittore australiano che, anche nel nostro paese, ha affascinato migliaia di lettori. L'autore dà prova di saper sondare le doti più delicate della natura umana. Rilegge la guerra di Troia tratteggiando la figura di un re, Priamo, in tutta la sua fragilità di uomo piegato dalla sofferenza. Il suo è il dolore incommensurabile per la perdita del figlio, quello più amato, come lo è sempre il figlio perduto. Priamo, cercando il modo per toccare il cuore di pietra di Achille, feroce assassino di Ettore, non può che parlargli come a un figlio a cui chiedere e da cui ottenere pietà.
                    <br></br>
                    Buona lettura, o meglio, la lettura è buona!
                    A cura di Grazia Liverani
                </Text>
                <Image className="mt-3" src="/public/imp_assets/books/Malouf.jpeg" alt="david-malouf-profile-image" size={ImageSize.DEFAULT} />
             </div>
        </PageLayout>
    )
}

export default IoSonoAchille