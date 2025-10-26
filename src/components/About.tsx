import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Image */}
          <div className="mb-12 lg:mb-0">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg bg-slate-200 overflow-hidden shadow-xl">
                <img
                  src="https://media.gettyimages.com/id/2166193783/photo/data-analytics-team-meeting-at-night.jpg?s=612x612&w=0&k=20&c=MBhix9YGEH0JQ39j2K8Dp4mA-tZ4QMWFm6V90rJGRJg="
                  alt="Company facility or team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-slate-800 rounded-lg -z-10"></div>
            </div>
          </div>

          {/* Right column - Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Building Trust Through Quality Since 1998
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                BuildMaster has been a trusted partner to contractors, developers, and architects for over 25 years. We combine deep industry expertise with an unwavering commitment to quality, delivering construction materials that meet the most stringent project requirements.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our success is built on reliability, technical knowledge, and a customer-first approach. From small commercial renovations to large-scale infrastructure projects, we provide the materials and support that keep projects moving forward.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6 mt-10">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-100 text-slate-800">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To deliver premium building materials with exceptional service, enabling our clients to complete projects on time, on budget, and to the highest quality standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-100 text-slate-800">
                    <Eye className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be the most trusted building materials supplier in the industry, known for quality products, technical expertise, and unwavering reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">Certifications & Memberships</h3>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="px-4 py-2 bg-slate-100 rounded-md">ISO 9001:2015</span>
                <span className="px-4 py-2 bg-slate-100 rounded-md">ISO 14001:2015</span>
                <span className="px-4 py-2 bg-slate-100 rounded-md">OSHA Certified</span>
                <span className="px-4 py-2 bg-slate-100 rounded-md">LEED Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
