import "./FormHeader.css"

export function FormHeader({ subtitle, title }) {
  return (
    <div className="FormHeader">
      <h3 className="subtitle">{subtitle}</h3>
      <h1 className="title">{title}</h1>
    </div>
  )
}