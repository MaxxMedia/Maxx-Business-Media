# MAXX Business Media

Next.js implementation of all 11 generated screens from the original Stitch project:
https://stitch.withgoogle.com/projects/6045325251490508765

Run locally with npm install and npm run dev. Verify a production build with npm run build.

| Route | Screen |
| --- | --- |
| / | Corporate homepage |
| /about-us | About and corporate story |
| /leadership | Executive leadership and team |
| /events | Searchable expo calendar |
| /our-brands | Filterable exhibition, publication, and digital portfolio |
| /events/diemex-2027 | DIEMEX 2027 event details, floorplan, FAQs, and trade inquiry |
| /services | Services, capabilities, FAQs, and discovery inquiries |
| /publications | Journals, filtered issue vault, editorial calendar, advertising, subscriptions |
| /media | Press search, year/category filters, sorting, photo gallery, original photo downloads |
| /careers | Combined role/department/location filters and application email preparation |
| /contact | Regional offices, real map links, divisional inquiry routing, FAQs |

Shared tokens and styles are in src/app/globals.css; the original brand guidelines are in design/DESIGN.md. Sora, Inter, Material Symbols, and all supplied imagery are served locally. Stitch credentials are not required at runtime.

Forms validate fields and prepare an email in the visitor's mail app. The visitor must send the email; resumes must be attached manually. No submission, booking, or pass issuance is claimed before sending. An email delivery backend can replace this handoff later.

The generated screens did not include full articles, issue PDFs, brochures, brand ZIPs, or legal documents. Resource controls open a request dialog with the relevant desk; gallery photo downloads use the supplied original images. The batch photo action creates a ZIP of the selected images in the browser. The original generated corporate copy and event details should be editorially reviewed before publication.
