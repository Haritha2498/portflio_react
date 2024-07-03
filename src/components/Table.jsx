import React from 'react'

const Table = () => {
  return (
    <>
    <div className="w-9/12">
                <h2 className="text-2xl font-bold" >Education</h2>
                <table className="border-4 border-blue-950 p-4 m-6 text-xl">
                    <tr className="ml-4">
                        <th className="border-4 p-6 m-4 border-blue-950">Qualification</th>
                        <th className="border-4 p-6 m-4 border-blue-950">Course</th>
                        <th className="border-4 p-6 m-4 border-blue-950">University/Board</th>
                        <th className="border-4 p-6 m-4 border-blue-950">College/School</th>
                        <th className="border-4 p-6 m-4 border-blue-950">Year of passing</th>
                        </tr>
                    <tr>
                    <td className="border-4 p-6 m-4 border-blue-950"> Bachelor of Engineering</td>
                    <td className="border-4 p-6 m-4 border-blue-950">Computer Science and Engineering</td>
                    <td className="border-4 p-6 m-4 border-blue-950">Anna University</td>
                    <td className="border-4 p-6 m-4 border-blue-950">Narayanaguru College of Engineeering</td>
                    <td className="border-4 p-6 m-4 border-blue-950">2020</td>
                    </tr>
                    <tr>
                    <td className="border-4 p-6 m-4 border-blue-950">HSC</td>
                    <td className="border-4 p-6 m-4 border-blue-950">Biomaths</td>
                    <td className="border-4 p-6 m-4 border-blue-950">Kerala state Board</td>
                    <td className="border-4 p-6 m-4 border-blue-950">NKM HSS DVPM,NTA</td>
                    <td className="border-4 p-6 m-4 border-blue-950">2016</td>
                    </tr>
                    <tr >
                    <td className="border-4 p-6 m-4 border-blue-950">SSLC</td>
                    <td className="border-4 p-6 m-4 border-blue-950">Biomaths</td>
                    <td className="border-4 p-6 m-4 border-blue-950">Kerala State Board</td>
                    <td className="border-4 p-6 m-4 border-blue-950">St.thereses Convent,NTA</td>
                    <td className="border-4 p-6 m-4 border-blue-950">2014</td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Table