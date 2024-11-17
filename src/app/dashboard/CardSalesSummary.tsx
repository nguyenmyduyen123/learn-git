import { useGetSalesSummaryQuery } from "@/state/api";
import React, { useMemo } from "react";
import { numberFormatter } from "./utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardSalesSummary = () => {
  const { data: salesSummaryArray } = useGetSalesSummaryQuery();
  const totalValueSum = useMemo(() => {
    return (
      salesSummaryArray?.reduce((acc, curr, index) => {
        return acc + curr.totalValue;
      }, 0) || 0
    );
  }, [salesSummaryArray]);

  const averageChangePercent = useMemo(() => {
    if (!salesSummaryArray) return 0;
    const totalChange =
      salesSummaryArray?.reduce((acc, curr, index) => {
        return acc + curr.changePercentage;
      }, 0) || 0;
    return totalChange / salesSummaryArray.length;
  }, [salesSummaryArray]);

  const highestValueObject = useMemo(() => {
    return salesSummaryArray?.reduce((acc, curr) => {
      return acc.totalValue > curr.totalValue ? acc : curr;
    }, salesSummaryArray[0]);
  }, [salesSummaryArray]);

  const highestDate = highestValueObject?.date
    ? new Date(highestValueObject.date).toLocaleString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      })
    : "N/A";
  console.log("test master");
  console.log("test fetch in test_fetch branch");
  const proccessSummaryArray = useMemo(() => {
    return salesSummaryArray?.map((summary) => {
      return {
        ...summary,
        date:
          summary.date &&
          new Date(summary.date).toLocaleString("vi-test-reset", {
            month: "numeric",
            day: "numeric",
            year: "2-digit",
          }),
      };
    });
  }, [salesSummaryArray]);
  console.log({ proccessSummaryArray });

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      {/* header */}
      <div>
        <h2 className="text-lg font-semibold mb-2 px-7 pt-5">Sales Summary</h2>
        <hr />
      </div>
      {/* body */}
      <div>
        {/* summary */}
        <div className="flex justify-between items-center mb-7 mt-5 px-7">
          <div className="text-large font-medium">
            <p className="text-xs text-gray-400">Value</p>
            <span className="text-2xl font-extrabold">
              {numberFormatter(totalValueSum)}
            </span>
            <span
              className={`${
                averageChangePercent > 0 ? "text-green-500" : "text-red-500"
              } text-sm ml-2`}
            >
              {averageChangePercent > 0 ? (
                <TrendingUp className="inline" />
              ) : (
                <TrendingDown className="inline" />
              )}
              {averageChangePercent.toFixed(2)}%
            </span>
          </div>
        </div>
        <ResponsiveContainer width="90%" height="75%" className={"mx-2"}>
          <BarChart
            data={proccessSummaryArray?.slice(-5)}
            margin={{ top: 0, right: 0, left: -25, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(value) => numberFormatter(value)} />
            <Bar
              dataKey="totalValue"
              fill="#3182ce"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
            <Tooltip formatter={(value: number) => numberFormatter(value)} />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <hr />
        <div className="flex justify-between items-center mt-6 text-sm px-7 mb-4">
          <p>{salesSummaryArray?.length || 0} days</p>
          <p className="text-sm">
            Highest Sales Date: <span className="font-bold">{highestDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSalesSummary;
