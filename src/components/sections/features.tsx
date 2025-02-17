import { Layout, PrimaryText } from '@/components'
import LazyLoad from 'react-lazyload'

const Features: React.FC = () => (
  <Layout
    id="features"
    className="flex flex-col md:pr-48 md:pl-12 p-6 mt-12"
    data-sidebar
  >
    <div className="flex flex-col-reverse lg:flex-row font-inter items-center">
      <div className="relative mt-12 md:mr-0 xl:px-4 lg:w-2/3 lg:mt-0">
        <LazyLoad height="636" once>
          <video
            className="rounded-lg shadow-md mx-auto"
            src="/videos/demo.mp4"
            height="636"
            width="720"
            autoPlay
            muted
            loop
            playsInline
          />
        </LazyLoad>
      </div>

      <div className="lg:w-2/3 lg:ml-16">
        <PrimaryText className="text-3xl gradient-tertiary tracking-tight font-bold font-spartan py-3">
          Mean and Very lean
        </PrimaryText>
        <p className=" text-2xl spaced-line ">
          Computer Hardware and Bandwidth is still a premium, we know that too
          well. That&apos;s why{` `}Vignette
          <span className="font-semibold "> wastes no time</span>, by making the
          application as small and performant as possible.
        </p>

        <PrimaryText className="text-3xl gradient-tertiary tracking-tight font-bold font-spartan py-3 mt-12">
          Pixel-Perfect Expressions
        </PrimaryText>
        <p className="text-2xl spaced-line">
          Every part of your face will be captured in{` `}
          <span className="font-semibold ">pixel-perfect accuracy</span>,{` `}
          thanks to our ever-adaptible Artificial Intelligence powered by
          Mediapipe and Tensorflow, delivering tracking quality like no other.
        </p>
      </div>
    </div>
  </Layout>
)

export default Features
