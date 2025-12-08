import { Injectable } from '@nestjs/common';
import { MeiliSearch } from 'meilisearch';

/**
 * Meilisearch service for search functionality
 * 
 * This service provides integration with Meilisearch for fast, typo-tolerant search.
 * 
 * Resources:
 * - Meilisearch documentation: https://docs.meilisearch.com/
 * - JavaScript client: https://github.com/meilisearch/meilisearch-js
 * 
 * Configuration required:
 * - MEILI_HOST: Meilisearch host URL (e.g., http://localhost:7700)
 * - MEILI_MASTER_KEY: Meilisearch master key for authentication
 */
@Injectable()
export class MeilisearchService {
  private client: MeiliSearch;

  constructor() {
    const host = process.env.MEILI_HOST || 'http://localhost:7700';
    const apiKey = process.env.MEILI_MASTER_KEY;

    this.client = new MeiliSearch({
      host,
      apiKey,
    });

    console.log('🔍 Meilisearch client initialized');
  }

  /**
   * Get the Meilisearch client instance
   */
  getClient(): MeiliSearch {
    return this.client;
  }

  /**
   * TODO: Index documents in Meilisearch
   * 
   * Example: Index users for search
   * - Create index if not exists
   * - Define searchable attributes
   * - Define filterable attributes
   * - Add documents to index
   */
  async indexDocuments(indexName: string, documents: any[]): Promise<void> {
    try {
      const index = this.client.index(indexName);
      await index.addDocuments(documents);
      console.log(`✅ Indexed ${documents.length} documents to ${indexName}`);
    } catch (error) {
      console.error('❌ Failed to index documents:', error);
      throw error;
    }
  }

  /**
   * TODO: Search documents
   * 
   * Example: Search users by name or email
   * - Build search query
   * - Apply filters (tenant, role, etc.)
   * - Handle pagination
   * - Return results with highlights
   */
  async search(indexName: string, query: string, options?: any): Promise<any> {
    try {
      const index = this.client.index(indexName);
      const results = await index.search(query, options);
      return results;
    } catch (error) {
      console.error('❌ Search failed:', error);
      throw error;
    }
  }

  /**
   * TODO: Update document in index
   */
  async updateDocument(indexName: string, document: any): Promise<void> {
    try {
      const index = this.client.index(indexName);
      await index.updateDocuments([document]);
      console.log(`✅ Updated document in ${indexName}`);
    } catch (error) {
      console.error('❌ Failed to update document:', error);
      throw error;
    }
  }

  /**
   * TODO: Delete document from index
   */
  async deleteDocument(indexName: string, documentId: string): Promise<void> {
    try {
      const index = this.client.index(indexName);
      await index.deleteDocument(documentId);
      console.log(`✅ Deleted document from ${indexName}`);
    } catch (error) {
      console.error('❌ Failed to delete document:', error);
      throw error;
    }
  }

  /**
   * TODO: Setup indexes and configuration
   * 
   * Call this during application bootstrap to:
   * - Create necessary indexes
   * - Configure searchable/filterable attributes
   * - Set up synonyms and stop words
   */
  async setupIndexes(): Promise<void> {
    console.log('TODO: Implement index setup');
    
    // Example: Create users index
    // const usersIndex = this.client.index('users');
    // await usersIndex.updateSettings({
    //   searchableAttributes: ['name', 'email'],
    //   filterableAttributes: ['tenantId', 'role', 'isActive'],
    //   sortableAttributes: ['createdAt', 'name'],
    // });
  }
}
