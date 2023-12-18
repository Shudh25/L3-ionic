import './ExploreContainer.css';
import Dashboard from "./Dashboard"

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      {/* <Dashboard /> */}
    </div>
  );
};

export default ExploreContainer;
