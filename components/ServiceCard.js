import Link from "next/link";
export default function ServiceCard({icon,title,text,items=[]}){
 return <article className="service-card">
  <div className="service-icon">{icon}</div><h3>{title}</h3><p>{text}</p>
  <ul>{items.map(x=><li key={x}>✓ {x}</li>)}</ul><Link href="/contact" className="text-link">Get a quotation →</Link>
 </article>
}