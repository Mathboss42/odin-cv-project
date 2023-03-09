import './styles.css';
import Info from './components/Info';
import EditableList from './components/EditableList';

function App() {
    return (
        <div className="App">
            <div className="container-xxl">
                <Info />
                <div className="sub-container row">
                    <EditableList sectionName="Education" sectionClass="col my-5" />
                    <EditableList sectionName="Experience" sectionClass="col my-5" />
                </div>
            </div>
        </div>
    );
}

export default App;