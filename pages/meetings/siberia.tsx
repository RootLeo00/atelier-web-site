/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { AuthorSetup, NavbarSetup, NavbarSetupType, NavbarSetup_NAVLINKS, NavbarSetup_Socials } from "../../src/constants/codeBlocks";

const Siberia = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Siberia
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    Giovedì 17 gennaio 2019 inizia il ciclo di conversazioni dell'Atelier di lettura:
                    Attraverso il mondo, Luoghi, idee, culture fuori dall'attenzione dei media con:
                    Siberia. Un immenso angolo nella Federazione russa.
                    Dove? Al solito posto!
                    Biblioteca Civica di Pordenone,
                    Sala Degan. Solito orario! (ore 18:00)
                </Text>
                <Text p >
                    Nel viaggio culturale in Siberia ci hanno accompagnato molti libri, tra di essi quello presentato da Lorenza Moro: Vladimir K. Arsen'ev, Dersu Uzala. Il piccolo uomo delle grandi pianure.
                    Vladimir K. Arsen'ev (1872-1930) fu esploratore, etnografo e scrittore e, nei primi trent'anni del Novecento fece diverse spedizioni per studiare, dal punto di vista geografico e topografico, nonché militare, le regioni della Siberia orientale intorno alle città di Vladivostock e Chabarovsk.
                    Durante questi viaggi, Arsen'ev studiò le popolazioni di questi lontani territori, conoscendo usi e costumi di udechi, tazy, nanajcy e altri popoli. Nel racconto dell'esploratore queste contrade sconosciute, che noi pensiamo silenziose e desolate, si riempiono di voci di uomini, cacciatori ma anche agricoltori, e di presenze animali come orsi, cavalli, tigri e scoiattoli.
                    La taiga, la grande foresta boreale, è piena di orti e di campi coltivati dove crescono: grano, mais, fave, papavero, tabacco sullo sfondo dei rododendri dalla rossa fioritura e all'ombra dei grandi cedri.
                    In questo libro dove protagonista è la natura con la sua bellezza misteriosa, giganteggia il personaggio di Dersu Uzala, un cacciatore gol'd o nanajcy che suscita subito l'interesse di Arsen'ev per la forza della sua personalità, per quel suo parlare calmo, anche se stentato, e senza servilismo.
                    Nella narrazione è centrale l'amicizia tra i due uomini, che li porterà ad affrontare insieme molte avventure d'esplorazione, sempre all'insegna della primitiva saggezza di Dersu e della sua capacità di essere felice come “frammento” della natura nella quale vive immerso, senza casa: “io sempre vivere monti”, come lui stesso dice. L'amicizia tra i due uomini finirà solo con la morte di Dersu Uzala e fornirà lo spunto ad Akira Kurosawa, uno dei più grandi registi contemporanei, per la realizzazione del film omonimo premiato con l'Oscar nel 1976.
                    Per l'Atelier di lettura
                    testo a cura di Lorenza Moro
                    Iconografia Lorella Fiorot
                </Text>
                <Image className="mt-3" src="/public/imp_assets/meetings/vladimir_siberia.png" alt="vladimir-siberia-profile-image" size={ImageSize.DEFAULT} />
            </div>
        </PageLayout>
    )
}

export default Siberia