import Menu from "./components/Menu";

const Index = () => (
  <main>
    <Menu>
      <Menu.Section title="Kund">
        <Menu.Item icon="" title="Anders Andersson" subTitle="Anna Andersson" />
      </Menu.Section>
      <Menu.Section title="Anläggning">
        <Menu.Item icon="" title="Lägenhetsvägen 1" />
        <Menu.Item icon="" title="Hemskogsvägen 18" />
      </Menu.Section>
      <Menu.Section title="Tjänst">
        <Menu.Item icon="" title="FASTSMÅ" />
        <Menu.Item icon="" title="KÄ190RE13" />
        <Menu.Item icon="" title="KÄ190MA26" />
        <Menu.Item icon="" title="VADSMÅ" />
      </Menu.Section>
    </Menu>
  </main>
)

export default Index;