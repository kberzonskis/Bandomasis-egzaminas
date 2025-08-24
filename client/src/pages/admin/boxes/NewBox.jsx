import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminBoxForm } from "../../../components/forms/AdminBoxForm";
import { SERVER_ADDRESS } from "../../../env";

export function AdminNewBoxPage() {
    return (
        <main>
            <AdminPageTitle title="New Box" />

            <div className="container">
                <div className="row">
                    <AdminBoxForm
                        api={SERVER_ADDRESS + '/api/admin/boxes'}
                        method="POST" />
                </div>
            </div>
        </main>
    );
}