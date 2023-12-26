export default function ProductDetail({ params }: { params: {id: string} }) {
    return (
        <h1>Hello, Product detail {params.id} Next.js!</h1>
    )
  }