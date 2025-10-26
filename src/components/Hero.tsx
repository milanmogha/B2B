import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Premium Building Materials for
              <span className="block text-slate-300 mt-2">
                Commercial Excellence
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Trusted by contractors and developers nationwide for over 25 years. We deliver high-performance construction materials that meet the most demanding project specifications.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-md hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-md border-2 border-white hover:bg-white hover:text-slate-900 transition-all duration-200"
              >
                View Capabilities
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-700 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-sm text-slate-400 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-sm text-slate-400 mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-slate-400 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg bg-slate-700 shadow-2xl overflow-hidden">
                {/* Facility / product image (from Unsplash). Replace URL with a local asset if you prefer. */}
                <img
                  src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
                  alt="Facility or product"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-slate-800 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
