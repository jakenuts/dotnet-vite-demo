using Vite.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

#region *** 📦 Add Vite Services

//
// Adds services for Vite and tag helpers
//
var manifestServiceLifetime =
    builder.Environment.IsDevelopment()
        ? ServiceLifetime.Scoped // Manifest updated on every request
        : ServiceLifetime.Singleton; // Manfiest loaded once at startup

builder.Services.AddViteServices(options => { options.Base = "dist"; }, manifestServiceLifetime);

#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");

    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// ---- App Configuration ----
// Use the Vite Development Server when the environment is Development.
if (app.Environment.IsDevelopment())
{
    // WebSockets support is required for HMR (hot module reload).
    // Uncomment the following line if your pipeline doesn't contain it.
    // app.UseWebSockets();
    // Enable all required features to use the Vite Development Server.
    // Pass true if you want to use the integrated middleware.
    //app.UseViteDevelopmentServer(/* false */);
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    "default",
    "{controller=Home}/{action=Index}/{id?}");

app.Run();