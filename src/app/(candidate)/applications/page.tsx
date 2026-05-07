"use client";

import { useState } from "react";
import { Search, Plus, ChevronDown, ArrowUpDown } from "lucide-react";

const allApplications = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote",
    date: "Oct 24, 2023",
    match: 92,
    status: "In Review",
  },
  {
    role: "Product Designer",
    company: "Design Studio",
    location: "New York",
    date: "Oct 20, 2023",
    match: 88,
    status: "Interviewing",
  },
  {
    role: "Senior React Engineer",
    company: "Global Systems",
    location: "Remote",
    date: "Oct 18, 2023",
    match: 65,
    status: "Applied",
  },
  {
    role: "UX Researcher",
    company: "InnovateLab",
    location: "San Francisco",
    date: "Oct 15, 2023",
    match: 95,
    status: "Offer Received",
  },
  {
    role: "Full Stack Dev",
    company: "Future Web",
    location: "Remote",
    date: "Oct 12, 2023",
    match: 45,
    status: "Rejected",
  },
  {
    role: "Backend Engineer",
    company: "FintechFlow",
    location: "London",
    date: "Oct 10, 2023",
    match: 85,
    status: "Applied",
  },
  {
    role: "Engineering Manager",
    company: "PayGrid",
    location: "Remote",
    date: "Oct 8, 2023",
    match: 72,
    status: "In Review",
  },
];

const statusConfig: Record<string, { bg: string; text: string }> = {
  "In Review": { bg: "bg-amber-100", text: "text-amber-700" },
  Interviewing: { bg: "bg-blue-100", text: "text-blue-700" },
  Applied: { bg: "bg-slate-100", text: "text-slate-600" },
  "Offer Received": { bg: "bg-green-100", text: "text-green-700" },
  Rejected: { bg: "bg-red-100", text: "text-red-700" },
};

const stats = [
  { label: "Total Applied", value: 24, change: "" },
  { label: "Active Interviews", value: 5, change: "Next: Today" },
  { label: "Offer Received", value: 1, change: "Expires in 4 days" },
];

export default function ApplicationsPage() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const statuses = [
    "All",
    "In Review",
    "Interviewing",
    "Applied",
    "Offer Received",
    "Rejected",
  ];

  const filtered = allApplications.filter((a) => {
    const matchesStatus = filterStatus === "All" || a.status === filterStatus;
    const matchesSearch =
      a.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-6 sm:p-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">
            My Applications
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Track and manage your job search
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
          <Plus size={16} /> Add New
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {stats.map(({ label, value, change }) => (
          <div
            key={label}
            className={`bg-white border border-slate-100 rounded-2xl p-5 shadow-sm ${label === "Offer Received" ? "border-green-200 bg-green-50" : ""}`}
          >
            <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
            <p className="text-3xl font-extrabold text-slate-900">{value}</p>
            {change && <p className="text-xs text-slate-400 mt-1">{change}</p>}
          </div>
        ))}
      </div>

      {/* Table Card */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 py-4 border-b border-slate-100">
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search applications..."
              className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-56 focus:bg-white transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2 text-sm border border-slate-200 rounded-xl bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                {statuses.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors">
              <ArrowUpDown size={13} /> Sort by: Newest
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Role / Company
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Applied Date
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Match %
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map(
                ({ role, company, location, date, match, status }) => (
                  <tr
                    key={role + company}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900">{role}</p>
                      <p className="text-xs text-slate-400">
                        {company} · {location}
                      </p>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-500 whitespace-nowrap">
                      {date}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${match >= 80 ? "bg-green-500" : match >= 60 ? "bg-blue-500" : "bg-amber-500"}`}
                            style={{ width: `${match}%` }}
                          />
                        </div>
                        <span
                          className={`text-xs font-bold ${match >= 80 ? "text-green-600" : match >= 60 ? "text-blue-600" : "text-amber-600"}`}
                        >
                          {match}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusConfig[status]?.bg} ${statusConfig[status]?.text}`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                        {status === "Offer Received"
                          ? "View Offer"
                          : "View Details"}
                      </button>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-100">
          <p className="text-xs text-slate-400">
            Showing 1–{filtered.length} of {allApplications.length} entries
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
              Previous
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${n === 1 ? "bg-blue-600 text-white" : "border border-slate-200 text-slate-500 hover:bg-slate-50"}`}
              >
                {n}
              </button>
            ))}
            <button className="px-3 py-1.5 text-xs border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
