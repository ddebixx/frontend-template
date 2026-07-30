interface ExamplePanelProps {
  title: string;
}

export const ExamplePanel = ({ title }: ExamplePanelProps) => {
  return (
    <section aria-label={title}>
      <h2>{title}</h2>
    </section>
  );
};
