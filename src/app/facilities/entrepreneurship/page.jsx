import EntrepreneurshipSpacePage from "../../components/EntrepreneurshipSpacePage";
import { startupProfiles } from "./data";

const link = (key) => ({
  name: startupProfiles[key].name,
  slug: startupProfiles[key].slug,
});

const cabinSpaceUsers = [
  link("aviva-organics"),
  link("dr-jini-narayan"),
  link("oneomics"),
  link("thennaivanam"),
  link("sakthi-fertilizer"),
  link("dhivvya-bhalan"),
  link("bublbox-eretail"),
  link("prarthana-v"),
  link("univzero-technologies"),
  link("ss-tech"),
  link("valriya-vision"),
  link("ziwwit-sustainable-technologies"),
  link("sherpa-biotech"),
  link("bharath-biofarm"),
  link("skandax-nexus"),
  link("tak-sfs"),
  link("quadrica"),
  link("themolife"),
  link("sparkle-consultancy"),
  link("gudimangalam-fpo"),
  link("sst-microgreen"),
  link("biofocus-scientific-solutions"),
  link("jithesh-vijayan"),
  link("ainiminds-technologies"),
  link("uyrmey-bio-research"),
  link("ecozoe-technologies"),
  link("coimbatore-ai"),
  link("secular-foods"),
  link("pothigai-innovations"),
  link("arshitha-food-products"),
  link("zero-hungry-foods"),
  link("futurenet-technologies"),
  link("immk-chemtech"),
  link("vebetos-world-wide"),
  link("vel-nutri-foods"),
];

export default function CabinSpace() {
  return (
    <EntrepreneurshipSpacePage
      title="Cabin Space"
      images={[
        "/cabinspacing/cabin spacing-1.jpeg",
        "/cabinspacing/cabin spacing-2.jpeg",
        "/cabinspacing/10.JPG",
        "/cabinspacing/15.JPG",
        "/cabinspacing/17.JPG",
        "/cabinspacing/IMG_9658.JPG",
        "/cabinspacing/IMG_9748.JPG",
        "/cabinspacing/Sigend MoA with Aviva Organics.JPG",
      ]}
      content={`
        <p>Individual air-conditioned (AC) cabins for startups, established companies, R&amp;D organizations, and institutions to showcase technologies, products, research outcomes, and innovations.</p>
        <ul class="list-disc ml-6 mt-2">
          <li>Private, lockable cabins for focused work</li>
          <li>Access to meeting rooms and common facilities</li>
          <li>Support services for business development</li>
          <li>Networking opportunities with other resident startups</li>
        </ul>
      `}
      startupList={cabinSpaceUsers}
    />
  );
}
