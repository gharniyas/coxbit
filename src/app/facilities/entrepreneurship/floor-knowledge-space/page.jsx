import EntrepreneurshipSpacePage from "../../../components/EntrepreneurshipSpacePage";
import { startupProfiles } from "../data";

const link = (key) => ({
  name: startupProfiles[key].name,
  slug: startupProfiles[key].slug,
});

const floorSpaceUsers = [
  link("tansim"),
  link("nithilam"),
  link("nature-mills"),
  link("insilicomics"),
  link("pechi-foods"),
  link("innogreen"),
  link("leaders-desk"),
  link("anga-information-technology"),
  link("yatvik-enterprises"),
  link("miyabi-agro"),
  link("mitti-lifetek-pharmadx"),
  link("karva-technologies"),
  link("bits-informatics"),
  link("home-ideas-technologies"),
  link("dc4-market-research"),
];

export default function FloorKnowledgeSpace() {
  return (
    <EntrepreneurshipSpacePage
      title="Floor / Knowledge Space"
      images={[
        "/floor spacing/floor spacing-3.jpeg",
        "/floor spacing/floor spacing-4.jpeg",
        "/floor spacing/floor spacing-5.jpeg",
        "/floor spacing/4D2A9431.JPG",
        "/floor spacing/Coxbit-startupTN -MoA.jpeg",
        "/floor spacing/IMG_9481.JPG",
        "/floor spacing/IMG_9486.JPG",
        "/floor spacing/WhatsApp Image 2026-01-30 at 9.36.17 AM.jpeg",
      ]}
      content={`
        <p>Individual floor spaces for companies and innovators to conduct projects, develop prototypes, present ideas and research concepts, and access opportunities for mentoring, collaboration, and R&amp;D support.</p>
        <ul class="list-disc ml-6 mt-2">
          <li>Open space and seating</li>
          <li>Access to seminar and training rooms</li>
          <li>Opportunities for peer learning and mentorship</li>
          <li>Participation in community events and programs</li>
        </ul>
      `}
      startupList={floorSpaceUsers}
    />
  );
}
