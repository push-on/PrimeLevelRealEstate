import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h1 className="heading-xl mb-6 opacity-0 animate-[fade-up_0.5s_ease_forwards_0.2s]">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fade-up_0.5s_ease_forwards_0.3s]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;