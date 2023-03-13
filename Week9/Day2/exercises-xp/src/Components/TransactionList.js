import { connect } from "react-redux";
import {UpdateIndex,Delete} from '../Redux/action'

const TransactionList = (props) => {
    // console.log(props.allData)
    return (
        <div>
            <h2>My Transactions</h2>
            <table>
                <tbody>
                {
                    props.allData.map((data,ind) => (
                        <tr key={ind}>
                            <td>{data.accountNumber}</td>
                            <td>{data.fsc}</td>
                            <td>{data.name}</td>
                            <td>{data.amount}</td>
                            <td>
                                <button onClick={() => props.updateInd(ind)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => props.delete(ind)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps =(state) => {
    console.log(state.currentIndex)
    return {
        allData : state.transactions
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        delete : (i) => dispatch(Delete(i)),
        updateInd : (i) => dispatch(UpdateIndex(i))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionList)