"use client";

import { CalendarDays } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An area chart with gradient fill";
const chartData = [
  { day: "Mon", desktop: 90 },
  { day: "Tue", desktop: 150 },
  { day: "Wed", desktop: 150 },
  { day: "Thu", desktop: 70 },
  { day: "Fri", desktop: 60 },
  { day: "Sat", desktop: 200 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
export function AreaGraphChart() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Overall Statistics</CardTitle>
        <div>
          <Select defaultValue="this-week">
            <SelectTrigger className="w-50">
                <CalendarDays />
              <SelectValue placeholder="Date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Date Range</SelectLabel>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                <SelectItem value="year-to-date">Year to Date</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <ChartContainer config={chartConfig} className="aspect-4/1">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: -20,
                right: 12,
              }}
            >
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D5F575" stopOpacity={1} />
                  <stop offset="100%" stopColor="#E5F5B4" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical
                strokeDasharray="3 3"
                strokeWidth={3}
              />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={6}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                dataKey="desktop"
                type="linear"
                fill="url(#fillDesktop)"
                stroke="#A9DF06"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
