import { FieldsPerCropChart } from "@/components/charts/FieldsPerCropChart";
import { RegisteredUserChart } from "@/components/charts/RegisteredUsersChart";

export const AdminDashboardPage = () => {
  return (
    <main>
      <section className="maincontainer flex flex-col gap-y-4">
        <div className="mx-auto w-2xl">
          <RegisteredUserChart />
        </div>

        <div className="mx-auto w-2xl">
          <FieldsPerCropChart />
        </div>
      </section>
    </main>
  );
};
