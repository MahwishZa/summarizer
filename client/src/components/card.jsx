import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

{/* About */ }
export const AboutCard = ({ title, description, highlight = false }) => {
  const cardClass = `flex flex-col text-left rounded-3xl p-6 justify-center items-start ${highlight ? '' : 'bg-white shadow-sm transition-all duration-300'}`;
  return (
    <div className={cardClass}>
      {title && <p className="text-sm uppercase leading-relaxed mb-4">{title}</p>}
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
}

{/* FAQ */ }
export const FAQCard = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`flex flex-col text-left rounded-3xl p-6 justify-center items-start border cursor-pointer transition-colors duration-300 
        ${isOpen ? "bg-accent" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center w-full py-4">
        <p className="text-xs uppercase leading-relaxed">{question}</p>
        {isOpen ? (
          <FiChevronUp className="h-6 w-6" />
        ) : (
          <FiChevronDown className="h-6 w-6" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-2" : "h-0 opacity-0"}`}
      >
        <p className="text-xs leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

{/* Features */ }
export const FeatureCard = ({ id, title, description, highlight = false }) => {
  const cardClass = `flex flex-col rounded-3xl p-8 justify-center items-start shadow-sm transition-all duration-300 ${highlight ? 'bg-accent' : 'bg-white'}`;
  return (
    <div className={cardClass}>
      {title && (
        <p className="text-xs md:text-sm uppercase leading-relaxed mb-4">
          {id && <span className="text-4xl mr-4">{id}</span>}
          {title}
        </p>
      )}
      <p className="text-xs md:text-sm text-left leading-relaxed">{description}</p>
    </div>
  )
}

{/* Pricing */ }
export const PriceCard = ({ title, subtitle, price, features, label, href, highlight = false }) => {
  const cardClass = `flex flex-col justify-between rounded-3xl p-8 text-center shadow-sm transition-all duration-300 ${highlight ? 'bg-accent' : 'bg-white'}`;
  return (
    <div className={cardClass}>
      <div className="pb-12 m-4 leading-relaxed">
        <h3 className="text-3xl mb-2">{title}</h3>
        <p className="text-xs uppercase mt-1 mb-4">{subtitle}</p>
        <p className="mb-10 text-base">
          <span className="text-5xl">€{price}</span>/mo
        </p>
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <Link to={href} className="btn w-2/3 mt-8 mx-auto">{label}</Link>
    </div>
  )
}

{/* Testimonials */ }
export const TestimonialCard = ({ quote, name, role }) => {
  const cardClass = `flex flex-col bg-white text-xs md:text-sm rounded-3xl p-8 shadow-sm transition-all duration-300 h-full justify-between`;
  return (
    <div className={cardClass}>
      <p className="text-left leading-relaxed">{quote}</p>
      <p className="mt-12">— {name} / {role}</p>
    </div>
  )
}

{/* Use Cases */ }
export const UseCaseCard = ({ icon, title, description, highlight = false }) => {
  const cardClass = `flex flex-col rounded-3xl  md:my-4 p-8 justify-start items-start shadow-sm transition-all duration-300 gap-6 ${highlight ? 'bg-white md:bg-accent' : 'bg-white'}`;
  return (
    <div className={cardClass}>
      <div className="flex items-center mb-4 w-full">
        {icon && <p className="text-3xl md:text-4xl mr-4 flex items-center justify-center">{icon}</p>}
        {title && (
          <p className="text-xs md:text-sm uppercase leading-relaxed">
            {title}
          </p>
        )}
      </div>
      <p className="text-xs md:text-sm text-left leading-relaxed w-full">{description}</p>
    </div>
  )
}