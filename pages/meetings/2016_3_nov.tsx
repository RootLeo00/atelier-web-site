/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { AuthorSetup, NavbarSetup, NavbarSetupType, NavbarSetup_NAVLINKS, NavbarSetup_Socials } from "../../src/constants/codeBlocks";
import fs from 'fs';
import path from 'path'

const Siberia = ({ filenames }: { filenames: string[] }) => {
  return (
    <PageLayout home>
      <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
        <Text title className="text-3xl">
          New York
        </Text>
        <hr className="mt-5" />
        <Text className="mt-10">
          Incontro del 3 Novembre 2016 presso la Biblioteca di Pordenone.
        </Text>
        <Slider images={filenames} >
        </Slider>
      </div>
    </PageLayout>
  )
}
export async function getStaticProps() {
  const dir_slider_img = './public/imp_assets/meetings/new_york_slider'
  const absolute_path_dir = path.resolve(dir_slider_img);
  const filenames = fs.readdirSync(absolute_path_dir, { withFileTypes: true })
    .filter(file => !file.isDirectory())
    .map(file => '/public/imp_assets/meetings/new_york_slider/' + file.name)
  return {
    props: {
      filenames,
    },
  }
}

export default Siberia