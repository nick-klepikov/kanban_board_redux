import {connect} from "react-redux";
import Task from "./Task";

function Column(props) {
    return (
        <div className="col" key={props.status}>
            {!props.isTrash &&
                <div>
            <h2 className="display-6">{props.status}</h2>
                    {props.cards.filter(el => el.status === props.status)
                    .sort((a, b) => b.priority - a.priority).map(el => <Task task={el} key={el._id} />)}
                </div>
            }
            {props.isTrash &&
                <div>
                    <h2 className="display-6">trash</h2>
                    {props.cards.filter(el => el.status.includes('trash'))
                        .sort((a, b) => b.priority - a.priority).map(el => <Task task={el} key={el._id} isTrash={props.isTrash}/>)}
                </div>
            }
            </div>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
});

export default connect(mapStateToProps)(Column);