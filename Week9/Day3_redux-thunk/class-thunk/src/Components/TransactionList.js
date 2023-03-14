import { connect } from "react-redux";
import {UpdateIndex,Delete} from '../Redux/action'
import {useSelector,useDispatch} from 'react-redux'

const TransactionList = (props) => {
    //USE HOOCKS
    // const transactions = useSelector (state => state.transactions)
    // const dispatch = useDispatch()
    // const currentIndex = useSelector(state => state.currentIndex)
    return (
        <div>
            <h2>My Transactions</h2>
            <table>
                <tbody>
                {
                    //here instead of props => transactions
                    props.allData.map((data,ind) => (
                        <tr key={ind}>
                            <td>{data.accountNumber}</td>
                            <td>{data.fsc}</td>
                            <td>{data.name}</td>
                            <td>{data.amount}</td>
                            <td>
                                {/* instead of props : () => dispatch()updateInd(ind) */}
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