"use client";

import { useState, useEffect, useCallback } from "react";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Award,
  MessageSquare,
  Settings,
  LogOut,
  Users,
  TrendingUp,
  Activity,
  Trash2,
  Search,
  Plus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

interface Project {
  _id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  image?: string;
  year: string;
  featured: boolean;
  createdAt: string;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: string;
  image?: string;
  published: boolean;
  createdAt: string;
}

interface Certificate {
  _id: string;
  certId: string;
  name: string;
  email?: string;
  issueDate: string;
  expiryDate?: string;
  type: string;
  status: string;
  createdAt: string;
}

interface Stats {
  contacts: number;
  projects: number;
  blogPosts: number;
  certificates: number;
}

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Contacts", icon: MessageSquare },
  { label: "Projects", icon: FolderOpen },
  { label: "Blog", icon: FileText },
  { label: "Certificates", icon: Award },
  { label: "Users", icon: Users },
  { label: "Settings", icon: Settings },
];

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [stats, setStats] = useState<Stats>({ contacts: 0, projects: 0, blogPosts: 0, certificates: 0 });
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // New item forms
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [showNewCertForm, setShowNewCertForm] = useState(false);

  const [newProject, setNewProject] = useState({ title: "", category: "", description: "", location: "", year: "2025", featured: false });
  const [newPost, setNewPost] = useState({ title: "", slug: "", excerpt: "", category: "", content: "", image: "" });
  const [newCert, setNewCert] = useState({ certId: "", name: "", email: "", type: "", issueDate: "", expiryDate: "" });

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [contactsRes, projectsRes, blogRes, certsRes] = await Promise.all([
        fetch("/api/contact"),
        fetch("/api/projects"),
        fetch("/api/blog"),
        fetch("/api/certificates"),
      ]);

      const contactsData = await contactsRes.json();
      const projectsData = await projectsRes.json();
      const blogData = await blogRes.json();
      const certsData = await certsRes.json();

      setContacts(contactsData.contacts || []);
      setProjects(projectsData.projects || []);
      setBlogPosts(blogData.posts || []);
      setCertificates(certsData.certificates || []);

      setStats({
        contacts: (contactsData.contacts || []).length,
        projects: (projectsData.projects || []).length,
        blogPosts: (blogData.posts || []).length,
        certificates: (certsData.certificates || []).length,
      });
    } catch (err) {
      console.error("Failed to fetch data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (type: string, id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    try {
      const res = await fetch(`/api/${type}/${id}`, { method: "DELETE" });
      if (res.ok) fetchData();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleCreateProject = async () => {
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });
      if (res.ok) {
        setShowNewProjectForm(false);
        setNewProject({ title: "", category: "", description: "", location: "", year: "2025", featured: false });
        fetchData();
      }
    } catch (err) {
      console.error("Create project failed:", err);
    }
  };

  const handleCreatePost = async () => {
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      if (res.ok) {
        setShowNewPostForm(false);
        setNewPost({ title: "", slug: "", excerpt: "", category: "", content: "", image: "" });
        fetchData();
      }
    } catch (err) {
      console.error("Create post failed:", err);
    }
  };

  const handleCreateCert = async () => {
    try {
      const res = await fetch("/api/certificates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCert),
      });
      if (res.ok) {
        setShowNewCertForm(false);
        setNewCert({ certId: "", name: "", email: "", type: "", issueDate: "", expiryDate: "" });
        fetchData();
      }
    } catch (err) {
      console.error("Create certificate failed:", err);
    }
  };

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPosts = blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCerts = certificates.filter(
    (c) =>
      c.certId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-background border-r z-40">
        <div className="p-6">
          <h1 className="text-xl font-bold text-primary">HEXA Admin</h1>
          <p className="text-xs text-muted-foreground">Dashboard</p>
        </div>

        <nav className="px-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                onClick={() => { setActiveNav(item.label); setSearchTerm(""); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">{activeNav}</h2>
            <p className="text-muted-foreground">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border rounded-lg text-sm bg-background w-64"
              />
            </div>
            <Button variant="outline" onClick={fetchData}>
              Refresh
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-muted-foreground">Loading...</div>
          </div>
        ) : (
          <>
            {/* Dashboard View */}
            {activeNav === "Dashboard" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[
                    { label: "Total Contacts", value: stats.contacts, icon: MessageSquare, change: "+12%" },
                    { label: "Published Posts", value: stats.blogPosts, icon: FileText, change: "+8%" },
                    { label: "Projects", value: stats.projects, icon: FolderOpen, change: "+5%" },
                    { label: "Certificates", value: stats.certificates, icon: Award, change: "+15%" },
                  ].map((stat) => (
                    <Card key={stat.label}>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-sustainability-green flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {stat.change} from last month
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Recent Contacts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {contacts.slice(0, 5).map((contact) => (
                          <div key={contact._id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div>
                              <p className="font-medium text-sm">{contact.name}</p>
                              <p className="text-xs text-muted-foreground">{contact.subject}</p>
                            </div>
                            <div className="text-right">
                              <span
                                className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                  contact.status === "PENDING"
                                    ? "bg-primary/10 text-primary"
                                    : contact.status === "READ"
                                    ? "bg-secondary/10 text-secondary"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {contact.status}
                              </span>
                              <p className="text-xs text-muted-foreground mt-1">
                                {new Date(contact.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        ))}
                        {contacts.length === 0 && (
                          <p className="text-sm text-muted-foreground text-center py-4">No contacts yet</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2" onClick={() => { setActiveNav("Projects"); setSearchTerm(""); }}>
                          <FolderOpen className="h-5 w-5" />
                          <span className="text-sm">Manage Projects</span>
                        </Button>
                        <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2" onClick={() => { setActiveNav("Blog"); setSearchTerm(""); }}>
                          <FileText className="h-5 w-5" />
                          <span className="text-sm">Manage Blog</span>
                        </Button>
                        <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2" onClick={() => { setActiveNav("Certificates"); setSearchTerm(""); }}>
                          <Award className="h-5 w-5" />
                          <span className="text-sm">Manage Certs</span>
                        </Button>
                        <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2" onClick={() => { setActiveNav("Contacts"); setSearchTerm(""); }}>
                          <MessageSquare className="h-5 w-5" />
                          <span className="text-sm">View Contacts</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {/* Contacts View */}
            {activeNav === "Contacts" && (
              <Card>
                <CardHeader>
                  <CardTitle>Contacts ({filteredContacts.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredContacts.map((contact) => (
                        <TableRow key={contact._id}>
                          <TableCell className="font-medium">{contact.name}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>{contact.subject}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                contact.status === "PENDING"
                                  ? "bg-primary/10 text-primary"
                                  : contact.status === "READ"
                                  ? "bg-secondary/10 text-secondary"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {contact.status}
                            </span>
                          </TableCell>
                          <TableCell>{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => handleDelete("contact", contact._id)}>
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                      {filteredContacts.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-muted-foreground">No contacts found</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {/* Projects View */}
            {activeNav === "Projects" && (
              <>
                <div className="flex justify-end mb-4">
                  <Button onClick={() => setShowNewProjectForm(!showNewProjectForm)}>
                    {showNewProjectForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                    {showNewProjectForm ? "Cancel" : "New Project"}
                  </Button>
                </div>

                {showNewProjectForm && (
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Add New Project</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <input placeholder="Title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <input placeholder="Category" value={newProject.category} onChange={(e) => setNewProject({ ...newProject, category: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <input placeholder="Location" value={newProject.location} onChange={(e) => setNewProject({ ...newProject, location: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <input placeholder="Year" value={newProject.year} onChange={(e) => setNewProject({ ...newProject, year: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <textarea placeholder="Description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} className="border rounded-lg px-3 py-2 text-sm col-span-2" rows={3} />
                        <div className="col-span-2 flex justify-end">
                          <Button onClick={handleCreateProject}>Create Project</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Projects ({filteredProjects.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Year</TableHead>
                          <TableHead>Featured</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredProjects.map((project) => (
                          <TableRow key={project._id}>
                            <TableCell className="font-medium">{project.title}</TableCell>
                            <TableCell>{project.category}</TableCell>
                            <TableCell>{project.location}</TableCell>
                            <TableCell>{project.year}</TableCell>
                            <TableCell>{project.featured ? "⭐" : "—"}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" onClick={() => handleDelete("projects", project._id)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                        {filteredProjects.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center text-muted-foreground">No projects found</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Blog View */}
            {activeNav === "Blog" && (
              <>
                <div className="flex justify-end mb-4">
                  <Button onClick={() => setShowNewPostForm(!showNewPostForm)}>
                    {showNewPostForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                    {showNewPostForm ? "Cancel" : "New Post"}
                  </Button>
                </div>

                {showNewPostForm && (
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Add New Blog Post</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <input placeholder="Title" value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <input placeholder="Slug" value={newPost.slug} onChange={(e) => setNewPost({ ...newPost, slug: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <input placeholder="Category" value={newPost.category} onChange={(e) => setNewPost({ ...newPost, category: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <input placeholder="Image URL" value={newPost.image || ""} onChange={(e) => setNewPost({ ...newPost, image: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <textarea placeholder="Excerpt" value={newPost.excerpt} onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })} className="border rounded-lg px-3 py-2 text-sm col-span-2" rows={2} />
                        <textarea placeholder="Content" value={newPost.content || ""} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} className="border rounded-lg px-3 py-2 text-sm col-span-2" rows={4} />
                        <div className="col-span-2 flex justify-end">
                          <Button onClick={handleCreatePost}>Create Post</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Blog Posts ({filteredPosts.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Slug</TableHead>
                          <TableHead>Published</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPosts.map((post) => (
                          <TableRow key={post._id}>
                            <TableCell className="font-medium">{post.title}</TableCell>
                            <TableCell>{post.category}</TableCell>
                            <TableCell className="text-muted-foreground">{post.slug}</TableCell>
                            <TableCell>{post.published ? "✅" : "📝"}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" onClick={() => handleDelete("blog", post._id)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                        {filteredPosts.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center text-muted-foreground">No blog posts found</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Certificates View */}
            {activeNav === "Certificates" && (
              <>
                <div className="flex justify-end mb-4">
                  <Button onClick={() => setShowNewCertForm(!showNewCertForm)}>
                    {showNewCertForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                    {showNewCertForm ? "Cancel" : "New Certificate"}
                  </Button>
                </div>

                {showNewCertForm && (
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Issue New Certificate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <input placeholder="Certificate ID" value={newCert.certId} onChange={(e) => setNewCert({ ...newCert, certId: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <input placeholder="Name" value={newCert.name} onChange={(e) => setNewCert({ ...newCert, name: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <input placeholder="Email" value={newCert.email} onChange={(e) => setNewCert({ ...newCert, email: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <input placeholder="Type" value={newCert.type} onChange={(e) => setNewCert({ ...newCert, type: e.target.value })} className="border rounded-lg px-3 py-2 text-sm" />
                        <div>
                          <label className="text-xs text-muted-foreground">Issue Date</label>
                          <input type="date" value={newCert.issueDate} onChange={(e) => setNewCert({ ...newCert, issueDate: e.target.value })} className="border rounded-lg px-3 py-2 text-sm w-full" />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground">Expiry Date</label>
                          <input type="date" value={newCert.expiryDate} onChange={(e) => setNewCert({ ...newCert, expiryDate: e.target.value })} className="border rounded-lg px-3 py-2 text-sm w-full" />
                        </div>
                        <div className="col-span-2 flex justify-end">
                          <Button onClick={handleCreateCert}>Issue Certificate</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Certificates ({filteredCerts.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Cert ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Issue Date</TableHead>
                          <TableHead>Expiry Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredCerts.map((cert) => (
                          <TableRow key={cert._id}>
                            <TableCell className="font-medium">{cert.certId}</TableCell>
                            <TableCell>{cert.name}</TableCell>
                            <TableCell>{cert.type}</TableCell>
                            <TableCell>{new Date(cert.issueDate).toLocaleDateString()}</TableCell>
                            <TableCell>{cert.expiryDate ? new Date(cert.expiryDate).toLocaleDateString() : "—"}</TableCell>
                            <TableCell>
                              <span
                                className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                  cert.status === "ACTIVE"
                                    ? "bg-green-100 text-green-800"
                                    : cert.status === "EXPIRED"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {cert.status}
                              </span>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" onClick={() => handleDelete("certificates", cert._id)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                        {filteredCerts.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center text-muted-foreground">No certificates found</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Users View */}
            {activeNav === "Users" && (
              <Card>
                <CardHeader>
                  <CardTitle>Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">User management coming soon. Currently managed via seed script.</p>
                </CardContent>
              </Card>
            )}

            {/* Settings View */}
            {activeNav === "Settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-1">Database</h3>
                      <p className="text-sm text-muted-foreground">Connected to MongoDB Atlas</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Site</h3>
                      <p className="text-sm text-muted-foreground">HEXA Engineering Consultancy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}
