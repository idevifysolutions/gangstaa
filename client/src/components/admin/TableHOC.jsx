import {AiOutlineSortAscending, AiOutlineSortDescending} from "react-icons/ai"
import {usePagination, useSortBy, useTable} from "react-table"

function TableHOC(columns, data, containerClassName, heading, showPagination = false){
    return function HOC(){
        const options = {
            columns,
            data,
            initialState :{
                pageSize: 6
            },
        };


        const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow, canPreviousPage, canNextPage, nextPage, previousPage, state: {pageIndex}, pageCount} = useTable(options, useSortBy, usePagination);

        return(
            <div className={`${containerClassName} bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-xl w-full p-4 overflow-x-auto`}>
                <h2 className="heading mt-6 text-center text-2xl font-bold uppercase">{heading}</h2>
                <table className="table w-full border-collapse" {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup, index) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id} className="p-2 text-left align-middle font-bold text-black text-[1.1rem] py-8 px-4">
                                        {column.render("Header")}
                                        {column.isSorted && (
                                            <span>
                                                {" "}
                                                {column.isSortedDesc ? (
                                                    <AiOutlineSortDescending/>
                                                    ) : (
                                                    <AiOutlineSortAscending/>
                                                    )}
                                            </span>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);

                            return (
                                <tr {...row.getRowProps()} key={row.id} className="">
                                    {row.cells.map((cell) => (
                                        <td  {...cell.getCellProps()} key={crypto.randomUUID()} className="p-4">{cell.render("Cell")}</td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                {showPagination && (
                    <div className="table-pagination flex items-center justify-center gap-4 p-8">
                        <button className="py-2 px-4 border-none outline-none rounded-xl cursor-pointer" disabled={!canPreviousPage} onClick={previousPage}>
                            Prev
                        </button>
                        <span>{`${pageIndex + 1} of ${pageCount}`}</span>
                        <button className="py-2 px-4 border-none outline-none rounded-xl cursor-pointer" disabled={!canNextPage} onClick={nextPage}>
                            Next
                        </button>
                    </div>
                )}
            </div>
        );
    };
}

export default TableHOC;