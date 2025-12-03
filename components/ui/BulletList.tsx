interface BulletListProps {
  items: readonly string[];
}

export const BulletList = ({ items }: BulletListProps) => (
  <ul className="text-[18px] pl-[15px] space-y-2">
    {items.map((item, index) => (
      <li key={index} className="list-disc">
        {item}
      </li>
    ))}
  </ul>
);
