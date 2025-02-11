import { 
  Laptop,
  BarChart,
  Lock,
  Zap
} from "lucide-react";

const features = [
  {
    name: 'Fast Performance',
    description: 'Built for speed and efficiency, our platform ensures lightning-fast performance.',
    icon: Zap,
  },
  {
    name: 'Analytics',
    description: 'Gain valuable insights with our comprehensive analytics dashboard.',
    icon: BarChart,
  },
  {
    name: 'Security',
    description: 'Enterprise-grade security to keep your data safe and protected.',
    icon: Lock,
  },
  {
    name: 'Cross Platform',
    description: 'Work seamlessly across all devices and platforms.',
    icon: Laptop,
  },
]

export function FeaturesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful features for modern businesses
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools you need to succeed in today's digital landscape.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}