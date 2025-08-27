export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="card text-center py-10">
      <div className="text-4xl mb-2">🍽️</div>
      <p className="opacity-80">{message}</p>
    </div>
  )
}
