import Link from "next/link";
import { Title } from "./components/Title";
import { CustomList } from "./components/CustomList";

const Index = () => (
  <main>
    <Title>Välkommen</Title>
    <Link href="contact">Kontakt</Link>
    
    <CustomList>
      <li>Bil</li>
      <li>Fartyg</li>
      <li>Tåg</li>
    </CustomList>
  
  
  </main>
)

export default Index;