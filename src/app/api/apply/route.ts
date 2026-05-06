import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_BASE_ID = "appsbyNSeu4YLspKU";
const AIRTABLE_TABLE_ID = "tblbcyQmB4igLx5c3";
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;

export async function POST(req: NextRequest) {
  if (!AIRTABLE_TOKEN) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  /* Basic validation */
  const { fullName, email, mobile, portfolio, tools, education,
          gradYear, hoursPerDay, activeProjects, expectedSalary,
          inspiration, motionRating } = body as Record<string, string>;

  if (!fullName || !email || !portfolio) {
    return NextResponse.json({ error: "Name, email and portfolio are required" }, { status: 400 });
  }

  const hoursMap: Record<string, string> = {
    "lt2": "Less than 2h", "2": "2h", "4": "4h", "6": "6h", "8": "8h",
  };

  const fields: Record<string, unknown> = {
    "Full Name": String(fullName).trim(),
    "Email": String(email).trim().toLowerCase(),
    "Mobile (WhatsApp)": mobile ? String(mobile).trim() : undefined,
    "Portfolio URL": String(portfolio).trim(),
    "Design Tools": tools ? String(tools).trim() : undefined,
    "Education": education ? String(education).trim() : undefined,
    "Graduation Year": gradYear ? parseInt(String(gradYear), 10) : undefined,
    "Hours Per Day": hoursPerDay ? hoursMap[String(hoursPerDay)] : undefined,
    "Active Projects / Clients": activeProjects ? parseInt(String(activeProjects), 10) : undefined,
    "Expected Salary (EGP)": expectedSalary ? String(expectedSalary).trim() : undefined,
    "Inspiration Sources": inspiration ? String(inspiration).trim() : undefined,
    "Motion Graphics Rating": motionRating ? parseInt(String(motionRating), 10) : undefined,
    "Status": "New",
    "Applied At": new Date().toISOString(),
  };

  /* Strip undefined values */
  Object.keys(fields).forEach((k) => fields[k] === undefined && delete fields[k]);

  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Airtable error:", err);
    return NextResponse.json({ error: "Failed to save application" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
