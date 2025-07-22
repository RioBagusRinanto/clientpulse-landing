import { MessageSquare, Calendar, BarChart3, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Centralized Communication",
    description: "Keep all client feedback and conversations in one organized place. Never lose track of important discussions again."
  },
  {
    icon: Calendar,
    title: "Automated Status Updates",
    description: "Schedule regular progress updates to keep clients informed. Set it once and let automation handle the rest."
  },
  {
    icon: BarChart3,
    title: "Communication Analytics",
    description: "Track client engagement, response times, and project progress with detailed analytics and insights."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team on client projects. Assign tasks, share updates, and stay synchronized."
  },
  {
    icon: Zap,
    title: "Smart Notifications",
    description: "Get notified about urgent messages, upcoming deadlines, and important client interactions instantly."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security keeps your client data safe. SOC 2 compliant with end-to-end encryption."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
            Everything you need to manage client communication
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From feedback collection to automated updates, ClientPulse provides all the tools you need to build stronger client relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 p-6 border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};